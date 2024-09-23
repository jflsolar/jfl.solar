import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Edit, Trash } from "tabler-icons-react";
import CustomButton from "../CustomButton";
import { useToast } from "@/hooks/use-toast";
import { LoadProfile } from "@/types";

interface Props {
  loads: LoadProfile[];
  onSubmit: (loadProfile: LoadProfile[]) => void;
  onBack: () => void;
}
const LoadProfiling = ({ loads, onSubmit, onBack }: Props) => {
  const { toast } = useToast();
  const [appliances, setAppliances] = useState<LoadProfile[]>(loads || []);
  const [newAppliance, setNewAppliance] = useState<LoadProfile>({
    name: "",
    quantity: 1,
    hoursPerDay: 1,
    powerRating: 100,
  });
  const [editIndex, setEditIndex] = useState<number | null>(null); // Track if we're editing or adding
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage modal open state

  useEffect(() => {
    setAppliances(loads);
  }, [loads]);

  const totalDailyConsumption = appliances.reduce((total, appliance) => {
    return (
      total +
      (appliance.quantity * appliance.hoursPerDay * appliance.powerRating) /
        1000
    );
  }, 0);

  // Calculate simultaneous load (in Watts)
  const totalSimultaneousLoad = appliances.reduce((total, appliance) => {
    return total + appliance.quantity * appliance.powerRating;
  }, 0);

  const handleSubmit = () => {
    if (editIndex !== null) {
      // Edit existing appliance
      const updatedAppliances = appliances.map((appliance, index) =>
        index === editIndex ? newAppliance : appliance
      );
      setAppliances(updatedAppliances);
      setEditIndex(null); // Reset the edit mode
    } else {
      // Add new appliance
      setAppliances([...appliances, newAppliance]);
    }
    setNewAppliance({
      name: "",
      quantity: 1,
      hoursPerDay: 1,
      powerRating: 100,
    });
    setIsDialogOpen(false); // Close modal after submission
  };

  const editAppliance = (index: number) => {
    setNewAppliance(appliances[index]);
    setEditIndex(index);
    setIsDialogOpen(true); // Open modal when editing
  };

  const deleteAppliance = (index: number) => {
    setAppliances(appliances.filter((_, i) => i !== index));
  };

  // Open modal for adding new appliance
  const openAddDialog = () => {
    setNewAppliance({
      name: "",
      quantity: 1,
      hoursPerDay: 1,
      powerRating: 100,
    });
    setEditIndex(null);
    setIsDialogOpen(true); // Open modal for adding
  };

  const handleNext = () => {
    if (appliances.length > 0) {
      onSubmit(appliances);
    } else {
      toast({
        title: "Empty Profile",
        variant: "destructive",
        description: "Please add atleast one item",
      });
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-16 px-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Input Your Load Profile
      </h2>
      <div className="flex w-full flex-col items-end gap-4">
        <CustomButton
          text="Add Appliance/Device"
          variant="secondary"
          onClick={openAddDialog}
        />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Appliance/Devices</TableHead>
              <TableHead className="w-[100px] text-center">Quantity</TableHead>
              <TableHead className="w-[100px] text-center">
                Hours of Use per Day
              </TableHead>
              <TableHead className="text-right">Power Rating (Watt)</TableHead>
              <TableHead className="text-right">
                Ave. Daily Consumption
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appliances.map((appliance, index) => (
              <TableRow key={index}>
                <TableCell>{appliance.name}</TableCell>
                <TableCell className="text-center">
                  {appliance.quantity}
                </TableCell>
                <TableCell className="text-center">
                  {appliance.hoursPerDay}
                </TableCell>
                <TableCell className="text-right">
                  {appliance.powerRating} W
                </TableCell>
                <TableCell className="text-right">
                  {(
                    (appliance.quantity *
                      appliance.hoursPerDay *
                      appliance.powerRating) /
                    1000
                  ).toFixed(2)}{" "}
                  kWh
                </TableCell>
                <TableCell className="space-x-1 text-right">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => editAppliance(index)}
                  >
                    <Edit size={18} />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteAppliance(index)}
                  >
                    <Trash size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex flex-col text-lg font-bold">
          <span>
            Total Daily Consumption: {totalDailyConsumption.toFixed(2)} kWh
          </span>
          <span>Simultaneous Load: {totalSimultaneousLoad} W</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <CustomButton text="Back" variant="secondary" onClick={onBack} />
        <CustomButton
          text="Next"
          variant="primary"
          onClick={() => handleNext()}
        />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editIndex !== null ? "Edit" : "Add"} Appliance/Device
            </DialogTitle>
            <DialogDescription>
              {editIndex !== null
                ? "Edit the appliance/device details."
                : "Fill out the details below to add a new appliance or device to your load profile."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Label htmlFor="name">Appliance/Device Name</Label>
              <Input
                id="name"
                placeholder="Appliance/Device Name"
                value={newAppliance.name}
                onChange={(e) =>
                  setNewAppliance({ ...newAppliance, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                placeholder="Quantity"
                type="number"
                value={newAppliance.quantity}
                onChange={(e) =>
                  setNewAppliance({
                    ...newAppliance,
                    quantity: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="hoursPerDay">Hours of Use per Day</Label>
              <Input
                id="hoursPerDay"
                placeholder="Hours of Use per Day"
                type="number"
                value={newAppliance.hoursPerDay}
                onChange={(e) =>
                  setNewAppliance({
                    ...newAppliance,
                    hoursPerDay: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="powerRating">Power Rating (Watt)</Label>
              <Input
                id="powerRating"
                placeholder="Power Rating (Watt)"
                type="number"
                value={newAppliance.powerRating}
                onChange={(e) =>
                  setNewAppliance({
                    ...newAppliance,
                    powerRating: Number(e.target.value),
                  })
                }
              />
            </div>
            <Button onClick={handleSubmit}>
              {editIndex !== null ? "Save Changes" : "Add Appliance"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoadProfiling;
