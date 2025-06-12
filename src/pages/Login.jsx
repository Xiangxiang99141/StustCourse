import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
            <Card className="w-full max-w-sm shadow-gray-500 drop-shadow-neutral-600">
                <CardHeader>
                    <CardTitle className="text-lg text-center min-h-1/4">登入</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="account">帳號</Label>
                            <Input
                                id="account"
                                type="text"
                                placeholder="請輸入學校帳號"
                                required
                                />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">密碼</Label>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-row gap-3 justify-between">
                    <Button type="submit" className="w-1/2">
                    登入
                    </Button>
                    <Button variant="outline" className="w-1/2">
                    訪客
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}


export default Login;