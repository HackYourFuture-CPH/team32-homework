'use client'
import {Button} from "@mui/material"
export default function Form() {
    
  return (
    <>
      <form>
        <div className="flex flex-col gap-4">
          <label>
            Name:
            <input type="text" name="name" required className="border p-2 rounded" />
          </label>
          <label>
            Age:
            <input type="number" name="age" required className="border p-2 rounded" />
          </label>
          <label>
            Amount:
            <input type="number" name="amount" required className="border p-2 rounded" />
          </label>
          <Button variant="contained" type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}
