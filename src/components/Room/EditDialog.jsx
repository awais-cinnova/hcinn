import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription, 
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"

const EditDialog = ({open , onOpenChange,title,description,children,error,onCancel,onSave}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg">
            <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription> }
            </DialogHeader>

        {children}

          {error && (
            <Alert variant="destructive" className="mt-3">
              <AlertTitle>Validation Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <DialogFooter className="mt-4 flex justify-end gap-2">
                <Button onClick={onCancel}> Cancel</Button>
                <Button onClick={onSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

export default EditDialog