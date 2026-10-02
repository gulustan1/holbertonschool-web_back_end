#!/usr/bin/env python3
""" Executing tasks concurrently with task_wait_n. """
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes task_wait_random n times with max_delay and returns
    the list of delays in ascending order.

    Args:
        n (int): Number of tasks to run.
        max_delay (int): Maximum delay per task.

    Returns:
        List[float]: List of delay times in ascending order.
    """
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
